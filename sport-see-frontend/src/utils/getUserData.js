/**
 * @description Extracts the data of the selected user
 * @param {object} usersData
 * @param {number} userId
 * @returns object
 */
function getUserData(usersData, userId) {
  return usersData.find(
    (user) =>
      userId ===
      (Object.prototype.hasOwnProperty.call(user, "id")
        ? `${user.id}`
        : `${user.userId}`)
  );
}

export default getUserData;
