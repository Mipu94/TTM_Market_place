
export default function handler(req: any, res: any) {
    const { id } = req.query
    const domain = process.env.NEXT_PUBLIC_DOMAIN

    let data = {
        url: `${domain}/static/assets/images/nft-cards/${id}.jpg`,
    }

    res.status(200).json(data);
}