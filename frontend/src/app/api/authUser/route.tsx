export const login = async (username: string, password: string) => {
  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch login: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};

export const register = async (username: string, password: string) => {
  const response = await fetch('http://localhost:5000/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch register: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
};