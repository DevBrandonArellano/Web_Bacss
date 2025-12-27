import { NextRequest, NextResponse } from 'next/server';
import { Ollama } from 'ollama';

// Asumimos que Ollama corre en el host local.
// En un entorno de producción, esto debería ser una variable de entorno.
const ollama = new Ollama({ host: 'http://localhost:11434' });

// Base de Conocimiento (Knowledge Base) simple
const knowledgeBase: { [key: string]: string } = {
  precios: "Nuestros precios son personalizados para cada cliente. Contáctanos por WhatsApp para una cotización detallada adaptada a tus necesidades.",
  inventarios: "Nuestra solución de Control de Inventarios con IA utiliza algoritmos avanzados para optimizar tu stock, predecir la demanda y reducir pérdidas. ¿Te gustaría agendar una demo?"
};

// Función para buscar en la base de conocimiento
function searchKnowledgeBase(message: string): string | null {
  const lowerCaseMessage = message.toLowerCase();
  for (const keyword in knowledgeBase) {
    if (lowerCaseMessage.includes(keyword)) {
      return knowledgeBase[keyword];
    }
  }
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message) {
      return new NextResponse('No message provided', { status: 400 });
    }

    // 1. Buscar en la base de conocimiento local primero
    const predefinedResponse = searchKnowledgeBase(message);

    if (predefinedResponse) {
      // Si se encuentra una respuesta predefinida, enviarla directamente
      return new NextResponse(predefinedResponse);
    }

    // 2. Si no hay respuesta predefinida, consultar a Ollama con Llama 3
    const stream = await ollama.stream(
        `model: 'llama3', prompt: '${message}', stream: true`
    );

    // 3. Devolver la respuesta de Ollama como un stream
    const readableStream = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          controller.enqueue(new TextEncoder().encode(chunk.response));
        }
        controller.close();
      },
    });

    return new NextResponse(readableStream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });

  } catch (error) {
    console.error('Error in chat API:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
