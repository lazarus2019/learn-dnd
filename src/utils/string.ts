// replaceRouteParams
/**
 * @description: Replaces placeholders in a route with provided values.
 * @param route - The route string with placeholders.
 * @param params - An object containing key-value pairs for replacement.
 * @returns The route with placeholders replaced by actual values
 */

export const replaceRouteParams = (
  route: string,
  params: Record<string, string>,
): string => {
  return Object.keys(params).reduce((updatedRoute, paramKey) => {
    const regex = new RegExp(`:${paramKey}`, 'g')

    return updatedRoute.replace(regex, encodeURIComponent(params[paramKey]))
  }, route)
}
