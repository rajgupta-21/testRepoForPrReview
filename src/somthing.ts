export async function getUser(payload: {
  user_name: String;
  last_name: string;
}) {
  const { user_name, last_name } = payload;
  if (!user_name || !last_name) {
    console.error("missingCredential");
    return;
  }
  return `hi ${user_name} ${last_name} how are you}`;
}
