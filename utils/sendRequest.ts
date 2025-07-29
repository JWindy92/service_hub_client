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
}: RequestOptions): Promise<T> {
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
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${text}`);
    }

    const contentType = response.headers.get('content-type') ?? '';
    if (contentType.includes('application/json')) {
      return (await response.json()) as T;
    }

    const text = await response.text();
    return text as unknown as T;
  } catch (error) {
    console.error('sendRequest error:', error);
    throw error;
  }
}