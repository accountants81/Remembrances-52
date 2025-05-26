'use server';

/**
 * @fileOverview Provides explanations of the virtues and benefits of a given Islamic supplication (du'a) or remembrance (adhkar).
 *
 * - virtueNarrator - A function that explains the virtues of a given du'a or adhkar.
 * - VirtueNarratorInput - The input type for the virtueNarrator function.
 * - VirtueNarratorOutput - The return type for the virtueNarrator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const VirtueNarratorInputSchema = z.object({
  text: z.string().describe('The Arabic text of the du\'a or adhkar.'),
});
export type VirtueNarratorInput = z.infer<typeof VirtueNarratorInputSchema>;

const VirtueNarratorOutputSchema = z.object({
  explanation: z.string().describe('An explanation of the virtues and benefits of the du\'a or adhkar.'),
});
export type VirtueNarratorOutput = z.infer<typeof VirtueNarratorOutputSchema>;

export async function virtueNarrator(input: VirtueNarratorInput): Promise<VirtueNarratorOutput> {
  return virtueNarratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'virtueNarratorPrompt',
  input: {schema: VirtueNarratorInputSchema},
  output: {schema: VirtueNarratorOutputSchema},
  prompt: `You are a knowledgeable Islamic scholar explaining the virtues and benefits of the following du'a or adhkar:

  {{text}}

  Explain the virtues and benefits of reciting this du'a or adhkar, referencing relevant Islamic texts where appropriate.`,
});

const virtueNarratorFlow = ai.defineFlow(
  {
    name: 'virtueNarratorFlow',
    inputSchema: VirtueNarratorInputSchema,
    outputSchema: VirtueNarratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
