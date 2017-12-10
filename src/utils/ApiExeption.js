export default function ApiError(message) {
    this.name = 'ApiError';
    this.status = message.status;
    this.errText = message.errText;
    this.stack = (new Error()).stack;
}