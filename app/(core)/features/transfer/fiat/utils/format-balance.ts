type BalanceString = string;

interface ParsedBalance {
  raw: bigint; // Для вычислений
  formatted: string; // Для отображения
  isZero: boolean;
}

export class BalanceParser {
  static parse(balanceStr: BalanceString): ParsedBalance {
    const raw = this.toBigInt(balanceStr);
    return {
      raw,
      formatted: this.format(raw),
      isZero: raw === 0n,
    };
  }

  static format(value: bigint, decimals: number = 18): string {
    if (value === 0n) return '0';

    const divisor = BigInt(10 ** decimals);
    const integerPart = value / divisor;
    const fractionalPart = value % divisor;

    const formattedInteger = integerPart
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    let formattedFractional = fractionalPart.toString().padStart(decimals, '0');
    formattedFractional = formattedFractional.replace(/0+$/, '');

    return formattedFractional
      ? `${formattedInteger}.${formattedFractional}`
      : formattedInteger;
  }

  static toDisplayString(balanceStr: string): string {
    const { formatted, isZero } = this.parse(balanceStr);
    return isZero ? '0' : formatted;
  }

  private static toBigInt(balanceStr: BalanceString): bigint {
    // Убираем пробелы и знак +
    const cleanStr = balanceStr.trim().replace(/^\+/, '');

    // Проверка на экспоненциальный формат
    if (cleanStr.includes('E') || cleanStr.includes('e')) {
      return this.parseExponential(cleanStr);
    }

    // Обычный формат
    try {
      return BigInt(cleanStr);
    } catch {
      return 0n;
    }
  }

  private static parseExponential(expStr: string): bigint {
    const numberValue = parseFloat(expStr);

    // Если число очень маленькое (< 1) или 0
    if (Math.abs(numberValue) < 1) {
      return 0n;
    }

    // Для чисел типа "1.23E+15"
    try {
      return BigInt(Math.floor(numberValue));
    } catch {
      return 0n;
    }
  }
}

// Использование
const balance1 = BalanceParser.parse('0E-18');
