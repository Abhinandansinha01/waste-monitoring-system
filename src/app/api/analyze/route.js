import { NextResponse } from 'next/server';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(request) {
  try {
    const { model, messages, maxTokens } = await request.json();

    const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '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';

    const resp = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'EcoSort AI Dashboard'
      },
      body: JSON.stringify({ model, messages, max_tokens: maxTokens, temperature: 0.3 })
    });

    if (!resp.ok) {
      const errData = await resp.json().catch(() => ({}));
      return NextResponse.json({ error: errData.error?.message || `API Error ${resp.status}` }, { status: resp.status, headers: corsHeaders });
    }

    const data = await resp.json();
    return NextResponse.json(data, { headers: corsHeaders });
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500, headers: corsHeaders });
  }
}
