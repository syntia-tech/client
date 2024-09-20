import axios, { AxiosInstance } from 'axios'
import { WebhookOptions, Webhook } from './types'

export class SyntiaClient {
  private api: AxiosInstance

  constructor(
    apiKey: string,
    baseURL: string = 'https://syntia.tech/api/v1'
  ) {
    this.api = axios.create({
      baseURL,
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    })
  }

  async generateWebhook(options: WebhookOptions): Promise<Webhook> {
    const response = await this.api.post('/webhooks/generate', options)
    return response.data
  }
}
