// api.js
export const getTeachersDetails = async () => {
    const response = await fetch('/api/teachers');
    return response.json();
  };
  