export const deleteContact = (itemId) => {
  return {
    type: "contacts/deleteContact",
    payload: itemId,
  };
};

export const filterContacts = (value) => {
  return {
    type: "filters/setFilter",
    payload: value,
  };
};