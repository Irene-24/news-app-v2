import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

const handler = async ( req: NextApiRequest,
    res: NextApiResponse ) =>
{
    const url = decodeURIComponent( req.query.url as string );
    const result = await fetch( url );
    const body = result.body;
    body?.pipe( res );
};

export default handler;
