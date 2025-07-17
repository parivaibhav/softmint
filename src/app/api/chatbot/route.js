function getBotReply(message) {
  const text = message.toLowerCase();

  if (text.includes('hello') || text.includes('hi')) {
    return 'Hi! 👋 Welcome to Softmint. How can we assist you today?';
  }

  if (text.includes('your name')) {
    return "I am Softmint's virtual assistant 🤖. How can I help you?";
  }

  if (text.includes('services')) {
    return 'We offer a wide range of IT services including:\n\n💻 Web Development\n📱 Mobile App Development\n🎨 UI/UX Design\n☁️ Cloud Solutions\n📊 IT Consulting\n🛠️ Maintenance & Support';
  }

  if (text.includes('web')) {
    return 'Our Web Development team builds scalable and modern websites using the latest technologies like React, Next.js, and more.';
  }

  if (text.includes('mobile')) {
    return 'We develop cross-platform mobile apps using Flutter and React Native, tailored to your business needs.';
  }

  if (text.includes('ui') || text.includes('ux') || text.includes('design')) {
    return 'Our UI/UX experts design intuitive and visually appealing user interfaces to enhance your digital products.';
  }

  if (text.includes('cloud')) {
    return 'We provide Cloud Solutions including AWS, Azure, and Google Cloud to help you scale your infrastructure securely.';
  }

  if (text.includes('consult') || text.includes('consulting')) {
    return 'Our IT Consulting service helps you make the right technology choices and business decisions.';
  }

  if (text.includes('support') || text.includes('maintenance')) {
    return 'We offer ongoing Maintenance and Support to ensure your systems run smoothly and securely.';
  }

  if (text.includes('contact') || text.includes('email') || text.includes('reach')) {
    return 'You can contact us at 📧 contact@softmint.in or visit our website 🌐 www.softmint.in.';
  }

  return "I'm not sure how to respond to that. You can ask about our services like 'web development', 'cloud solutions', or 'UI/UX design'. 😊";
}

export async function POST(request) {
  try {
    const { message } = await request.json();
    const reply = getBotReply(message);
    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 