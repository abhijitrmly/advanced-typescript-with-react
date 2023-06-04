import { z } from 'zod';

export const extraIngredientSchema = z.object({
    name: z.string(),
    price: z.number(),  
});

export const extraIngredientsSchema = z.record(extraIngredientSchema);