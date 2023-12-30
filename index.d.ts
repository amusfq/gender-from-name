declare module "gender-from-name" {
    export function detectGender(name: string, lang?: 'id' | 'en' | 'it' | 'es'| 'fr'): string;
}
