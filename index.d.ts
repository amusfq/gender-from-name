declare module "gender-from-name" {
    export function getGender(name: string, lang?: 'id' | 'en' | 'it' | 'es'| 'fr'): string;
}
