/** Récupérer les utilisateurs connectés. */
export const getConnectedUsers = async () => {
  const response = await fetch("/api/connected_users");
  const data = /** @type {Array<import("../types").UserConnected>} */ (await response.json());

  return data;
};
