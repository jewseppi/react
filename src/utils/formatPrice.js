export default function formatPrice(price) {
  if (price) return `$${price}`;
  return null;
}
