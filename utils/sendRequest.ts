export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface RequestOptions {
  method: HttpMethod;
  baseUrl: string;
  path: string;
  payload?: any;
  headers?: Record<string, string>;
}

export async function sendRequest<T = any>({
  method,
  baseUrl,
  path,
  payload,
  headers = {},
}: RequestOptions): Promise<Response> {
  const url = `${baseUrl}${path}`;

  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  if (payload) {
    options.body = JSON.stringify(payload);
  }

  try {
    const response = await fetch(url, options);
    
    return response
  } catch (error) {
    console.error('sendRequest error:', error);
    throw error;
  }
}