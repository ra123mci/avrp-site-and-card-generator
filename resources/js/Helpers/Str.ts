declare global {
    interface String {
        toCamel(): string;
        toSnake(): string;
        toText(): string;
        ucfirst(): string;
        reverse(): string
        countOccurrences(substring: string): number
        reverse(): string
        truncate(length: number): string
        capitalize(): string
        removeWhitespace(): string
        isPalindrome(): boolean
        replaceAllIgnoreCase(search: string, replace: string): string
        countWords(): number
    }
}

String.prototype.toCamel = function (): string {
    return this.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
};

String.prototype.toSnake = function (): string {
    return this.replace(/([A-Z])/g, '_$1').toLowerCase();
};

String.prototype.toText = function (): string {
    return this.replace(/([a-z])([A-Z])/g, '$1 $2')
               .replace(/_/g, ' ')
               .toLowerCase();
};

String.prototype.ucfirst = function (): string {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.reverse = function (): string {
    return this.split('').reverse().join('');
};

String.prototype.countOccurrences = function (substring: string): number {
    const regex = new RegExp(substring, 'g');
    return (this.match(regex) || []).length;
};

String.prototype.reverse = function (): string {
    return this.split('').reverse().join('');
};

String.prototype.truncate = function (length: number): string {
    if (this.length > length) {
        return this.slice(0, length - 3) + '...';
    } return this+'';
};

String.prototype.capitalize = function (): string {
    return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

String.prototype.removeWhitespace = function (): string {
    return this.replace(/\s+/g, '');
};

String.prototype.isPalindrome = function (): boolean {
    const cleanStr = this.removeWhitespace().toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
};

String.prototype.replaceAllIgnoreCase = function (search: string, replace: string): string {
    const regex = new RegExp(search, 'gi');
    return this.replace(regex, replace);
};

String.prototype.countWords = function (): number {
    return this.trim().split(/\s+/).filter(word => word !== '').length;
};


export function str(value: any): String {
    return value as String;
}
