export default function handler(req, res) {
    domain = process.env.NEXT_PUBLIC_DOMAIN

    res.status(200).json({ text: 'Hello' });
}