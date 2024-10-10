import blogImage from '../assets/blog3.png';
import newspaper from '../assets/gemini-generated-image-j2chwgj2chwgj2ch-1.png'; // Image for the second post
import phone from '../assets/gemini-generated-image-oc3ks7oc3ks7oc3k-1.png'; 
export const headerData = {
  logo: "THINK41",
  menuItems: [
    { text: "About Us", href: "/aboutus" },
    { text: "Careers", href: "https://think.recruit41.com/"},
    { text: "Contact Us", href: "https://forms.gle/T2RiTY2duEPnjGk3A" }
  ]
};

export const heroData = {
  title: "Reimagining Enterprise Software with GenAI",
  subtitle: "Crafting intelligent software to solve your unique challenges",
  imageAlt: "AI Visualization"
};

export const featuresData = {
  title: "Generative AI Transformation",
  slides: [
    {
      title: "PRODUCTIVITY",
      description: "Harnessing GenAI's power, we revolutionise your organisation's productivity at individual, team, and enterprise levels. Our solutions streamline existing processes and software, accelerating development cycles and optimising business operations through AI-driven automation."
    },
    {
      title: "POSSIBILITY",
      description: "Leverage GenAI to achieve what was once unthinkable in technology and business. Through strategic investment in emerging possibilities, we empower organisations to unlock unprecedented growth and redefine industry standards."
    },
    {
      title: "PIONEERING",
      description: "Turn today's pioneering concepts into your competitive advantages, ensuring your organisation always stays ahead of the curve. At the forefront of GenAI innovation, we'll help your organisation explore and develop use-cases that challenge conventional limits and reshape your industry."
    }
  ]
};

export const autoPODSData = {
  title: "AutoPODS",
  subtitle: "Pods empowered with AI tools delivering exceptional performance",
  description: "Autonomous pods are cross-functional teams consisting of full stack engineers, engineering & product managers, working alongside GenAI agents. This approach ensures that we deliver robust, end-to-end products and services tailored to your specific needs."
};

export const solutionsData = {
  title: "Solutions & Insights",
  description: "Discover the features and capabilities of our latest demos and see how they can benefit you. Stay updated with the latest trends and developments in the world of AI and technology."
};

export const recruit41Data = {
  slides: [
    {
      title: "Recruit 41",
      content: "An AI-powered digital hiring web application designed to revolutionize the recruitment process. Leveraging advanced machine learning algorithms, Recruit 41 helps companies identify and hire the best-fitting employees by analyzing resumes, assessing skills, and matching candidates to job roles with precision. This automated recruitment agent streamlines the hiring process, reduces time-to-hire, and ensures that organizations find the most qualified talent efficiently.",
      cta: "Explore Recruit 41",
      link: "https://demo.recruit41.com/"
    },
    {
      title: "RQ",
      content: "An AI-powered digital hiring web application designed to revolutionize the recruitment process. Leveraging advanced machine learning algorithms, Recruit 41 helps companies identify and hire the best-fitting employees by analyzing resumes, assessing skills, and matching candidates to job roles with precision. This automated recruitment agent streamlines the hiring process, reduces time-to-hire, and ensures that organizations find the most qualified talent efficiently.",
      cta: "Explore RQ",
      link: "https://dev-41-1081098542602.us-central1.run.app/"
    }
  ]
};

export const insightsData = {
  blogPosts: [
    {
      title: "How to Think AI: Making GenAI Cost-Efficient",
      tags: ["AI Strategy", "Cost Optimization", "Quantization Techniques"],
      linkText: "Read More",
      // author: "John Doe",
      date: "Sept 20, 2024",
      readTime: "5 min read",
      image: blogImage,
      content1: {
        sections: [
          {
            type: "paragraph",
            text: "As more companies transition their Generative AI models from Proof-of-Concept (PoC) to production environments, one crucial factor that often becomes a roadblock is cost optimization."
          },
          {
            type: "paragraph",
            text: "We sat down with Sripathi Krishnan, Co-Founder of Think41, whose expertise in scaling GenAI has helped companies balance performance and cost-efficiency. In this interview, Sri shares key insights on achieving cost savings without sacrificing quality—from using quantization techniques to deploying smaller models. Let’s dive into his expert advice on making GenAI not only scalable but also economically viable."
          },
          {
            type: "heading",
            level: 2,
            text: "Interview with Sripathi Krishnan"
          },
          {
            type: "paragraph",
            text: "Host: Great to have you here, Sri! Let’s dive in. How can companies optimize costs when transitioning from proof-of-concept (PoC) to production using local models?"
          },
          {
            type: "paragraph",
            text: "Sri: There are various quantization techniques available that allow local models to run more efficiently. Nowadays, you can even use inference servers locally, which support the same API format as OpenAI. For example, you can run a LLaMA model locally but still use the same API structure as OpenAI. This setup can lower development and QA costs because you don’t have to change your code. In production, you can switch between models without significant changes to your system."
          },
          {
            type: "paragraph",
            text: "You can also use a combination of models—local models for simpler tasks and more expensive, powerful models for complex ones. There are routers that can evaluate the complexity of a request and decide which model to use. This allows you to reduce costs while maintaining quality."
          },
          {
            type: "paragraph",
            text: "Host: That’s fascinating! How do quantization techniques specifically help in reducing costs for generative AI applications?"
          },
          {
            type: "paragraph",
            text: "Sri: Let’s take the LLaMA-7B model as an example. It has 70 billion parameters. Each parameter typically takes up two bytes of memory using FP16 (16-bit floating point). However, you don’t always need to store model weights in 16-bit precision. Quantization allows you to round off some of the higher-precision bits and store the weights in fewer bits."
          },
          {
            type: "paragraph",
            text: "For instance, you can reduce the precision to 4 bits per weight, which significantly reduces memory usage. Some papers have even gone down to 1.5 bits per parameter. While this does reduce the quality of the model, the tradeoff is often minimal. You can often quantize a large model to 4 bits without a noticeable drop in performance, and that can save both memory and computational costs."
          },
          {
            type: "paragraph",
            text: "Host: Interesting! How does fine-tuning a model impact costs, and what strategies can optimize this process?"
          },
          {
            type: "paragraph",
            text: "Sri: Fine-tuning is a balancing act. Early in the process, when you're just testing use cases and hypotheses, I recommend not starting with fine-tuning. Focus on using the best available models for your tasks. Once you’ve gathered enough data—either through traditional methods or synthetic data generation—then consider fine-tuning."
          },
          {
            type: "paragraph",
            text: "There are fixed costs involved in fine-tuning, such as gathering data, training the model, and hosting it for inference. You need enough volume in your use case to justify these costs. Moreover, models are constantly improving, so the model you fine-tune today might be obsolete in six months, requiring you to fine-tune again on a newer, cheaper, or faster model."
          },
          {
            type: "paragraph",
            text: "For example, in our automated interview product, we fine-tuned a model to detect when a candidate has finished speaking. Since this occurs frequently in our use case, we had enough data and a clear business case to justify the cost of fine-tuning."
          },
          {
            type: "paragraph",
            text: "Host: Got it! How do smaller models contribute to cost savings, and when should they be considered over larger models?"
          },
          {
            type: "paragraph",
            text: "Sri: It depends on the complexity of the use case. Let’s take a conversational AI bot as an example. During an interview, the bot might need to transcribe a candidate’s speech and generate intelligent responses. Instead of using a large model for everything, you could use a smaller model to correct transcription errors quickly or even summarize the candidate’s response before passing it to the larger model for a more detailed analysis."
          },
          {
            type: "paragraph",
            text: "In chat-based systems, not all conversations require a large model. You can use a simple classifier to evaluate the complexity of the request and route simpler tasks to cheaper, smaller models. There are even frameworks that facilitate this kind of routing. Empirical data shows that using smaller models in combination with larger ones can reduce costs by up to 80% without any significant loss in quality."
          },
          {
            type: "paragraph",
            text: "Host: That’s insightful! How does running inference on the edge or on a device help with cost optimization for generative AI applications?"
          },
          {
            type: "paragraph",
            text: "Sri: There’s been a wave of new technologies that allow smaller models to run directly on devices like browsers and mobile applications. This approach can offload simpler tasks to the edge, such as basic transcription or image analysis, and send more complex tasks to the server. For instance, Chrome now offers a top-level window.AI object for running models locally in the browser."
          },
          {
            type: "paragraph",
            text: "Apple is also focused on enabling local execution. By running tasks like transcription locally, you can reduce server costs. You can even implement mechanisms to measure the confidence of local inference—if confidence is low, you can send the data to the server for further processing."
          },
          {
            type: "paragraph",
            text: "Host: Great! How do commercial models and APIs fit into the cost optimization strategy for generative AI applications?"
          },
          {
            type: "paragraph",
            text: "Sri: You can mix and match commercial models just like local models. For instance, with OpenAI’s GPT-4, you can pair the smaller GPT-3.5 model with the larger one and route requests accordingly. Google’s Gemini models, for example, allow you to cache conversation history, which reduces token usage and costs."
          },
          {
            type: "paragraph",
            text: "In a chat application, the conversation grows with each turn, and typically you send the entire conversation history to the model for each request. With Gemini, you can cache this history and only send new parts of the conversation, which lowers your costs significantly."
          },
          {
            type: "paragraph",
            text: "Host: Thanks for sharing that! Lastly, how do you see the future of cost optimization evolving for generative AI applications?"
          },
          {
            type: "paragraph",
            text: "Sri: It’s hard to predict, but I expect several trends. First, improvements in model architectures will continue to reduce inference costs. Second, we’ll see more specialized hardware designed for AI inference, which will also lower costs. Some companies are already releasing hardware that offers up to 10x improvements in efficiency."
          },
          {
            type: "paragraph",
            text: "I also expect open-source models to catch up, offering better performance at lower costs. While costs are expected to come down in the near term, we’ll also see more advanced, larger models that offer significantly better reasoning capabilities, which will be more expensive. So there will be a balance between cheaper, faster models and more powerful but costly ones."
          },
          {
            type: "paragraph",
            text: "Host: Thank you for those insights, Sri! It’s been a pleasure discussing cost optimization for generative AI applications with you."
          }
        ]
      },
      content2: "As Generative AI continues to evolve, the focus on cost optimization will only intensify. At Think41, we understand that the journey from PoC to production can be financially daunting, but with the right strategies, you can build GenAI solutions that are sustainable, scalable, and cost-effective. By adopting these best practices, companies can unlock the full potential of GenAI—without breaking the bank. Ready to optimize your GenAI solution for cost-efficiency? Let’s connect and explore how we can help you take your GenAI projects from concept to enterprise-scale success."
    },
    {
      title: "Generative AI is no longer just a buzzword - it's transforming industries. Can your GenAI MVP truly scale to enterprise-level impact?",
      tags: ["Business", "GenAI", "Scaling"],
      link: "https://www.linkedin.com/posts/think41_think41-how-to-poc-to-production-activity-7241071484922667009-jNg1",
      linkText: "Read more",
      image: newspaper // Add your specific image path here
    },
    {
      title: "'Build As You Think' - Our Autopods with Generative AI powered teams making a distant dream get closer to reality",
      tags: ["AI & Technology", "Productivity", "Team"],
      link: "https://www.linkedin.com/posts/think41_autopod-bayt-genai-activity-7233458105995419648-LaTE",
      linkText: "Learn more",
      image: phone // Add your specific image path here
    },
  ]
};

export const footerData = {
  quickLinksTitle: "Quick Links",
  demosTitle: "Demos",
  contactInfoTitle: "Contact Info",
  emailLabel: "Email Address",
  phoneLabel: "Mobile No.",
  addressLabel: "Office Address",
  mapViewText: "View on Google Maps",
  quickLinks: [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/aboutus" },
    // { text: "Visualise AI", href: "/visualise-ai" },
    // { text: "Blog Insight", href: "/blog" },
    { text: "Career", href: "https://think.recruit41.com/" }
  ],
  demos: [
    { text: "R41", href: "https://demo.recruit41.com/" },
    { text: "RQ", href: "https://dev-41-1081098542602.us-central1.run.app/" },
    // { text: "CQ", href: "/demos/cq" },
    // { text: "Visualise AI", href: "/demos/visualise-ai" }
  ],
  contactInfo: {
    email: "contact@think41.com",
    phone: "+91 98273 68363",
    address: "Office Address : 2nd Floor, Obeya,\u00A0 \u00A0 \u00A0 Gusto, 367, 5th Main Rd, Sector 6,\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 HSR Layout, Bengaluru, Karnataka \u00A0 \u00A0 \u00A0 560102"
  },
  socialMedia: [
    { name: "Facebook", url: "https://www.facebook.com/Think41corp/photos" },
    { name: "Instagram", url: "https://www.instagram.com/think41corp/" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/think41/" }
  ],
  mapUrl: "https://maps.app.goo.gl/utosbYzjPcSnQdyi7",
  copyright: "© 2024 THINK41. All rights reserved.  ",
  privacyPolicy: { text: "Privacy Policy", href: "/privacy-policy" }
};
