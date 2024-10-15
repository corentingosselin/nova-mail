export interface INewsletterProvider {

    /**
     * Function to subscribe to the newsletter
     * @param email Email to subscribe
     * @returns Promise<boolean>
     * @throws Error
     * @example
     * ```typescript
     * const email = '';
     * const result = await subscribe(email);
     * ```
     */
    subscribe(email: string): Promise<boolean>;  
}