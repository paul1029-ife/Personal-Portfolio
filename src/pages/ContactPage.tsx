import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, CheckCircle, XCircle } from 'lucide-react';

// Schema definition
const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required')
});

type ContactFormData = z.infer<typeof contactFormSchema>;

// Alert Component
interface AlertProps {
  variant: 'success' | 'error';
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ variant, children }) => {
  const styles = {
    success: "bg-green-50 border-green-200 text-green-800",
    error: "bg-red-50 border-red-200 text-red-800"
  };

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-500" />,
    error: <XCircle className="w-5 h-5 text-red-500" />
  };

  return (
    <div className={`flex items-center gap-3 px-4 py-3 border rounded-lg ${styles[variant]}`}>
      {icons[variant]}
      <p className="text-sm">{children}</p>
    </div>
  );
};

// Input Field Component
interface InputFieldProps {
  label: string;
  name: keyof ContactFormData;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
  register: any;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  textarea = false,
  register,
  error
}) => {
  const baseClassName = `w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
    error ? 'border-red-500' : 'border-gray-300'
  }`;

  return (
    <div>
      <label 
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          rows={5}
          className={baseClassName}
          placeholder={placeholder}
          {...register(name)}
        />
      ) : (
        <input
          type={type}
          id={name}
          className={baseClassName}
          placeholder={placeholder}
          {...register(name)}
        />
      )}
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

// Contact Info Item Component
interface ContactInfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, label, value, href }) => (
  <div className="flex items-center space-x-4">
    <div className="bg-blue-100 p-3 rounded-full">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-600">{label}</p>
      {href ? (
        <a 
          href={href}
          className="text-gray-900 hover:text-blue-600 transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-gray-900">{value}</p>
      )}
    </div>
  </div>
);

// Social Link Component
interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
  >
    {icon}
  </a>
);

// Main Component
const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const [submitStatus, setSubmitStatus] = React.useState<'success' | 'error' | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      console.log(data)
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <ContactInfoItem
                  icon={<Mail className="w-6 h-6 text-blue-600" />}
                  label="Email"
                  value="paul.agbogun@gmail.com"
                  href="mailto:paul.agbogun@gmail.com"
                />
                <ContactInfoItem
                  icon={<Phone className="w-6 h-6 text-blue-600" />}
                  label="Phone"
                  value="+234 906 640 1999"
                  href="tel:+2349066401999"
                />
                <ContactInfoItem
                  icon={<MapPin className="w-6 h-6 text-blue-600" />}
                  label="Location"
                  value="Egbeda, Lagos State, Nigeria"
                />
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Connect with me
                </h4>
                <div className="flex space-x-4">
                  <SocialLink 
                    href="https://github.com/paul1029-ife"
                    icon={<Github className="w-6 h-6 text-gray-700" />}
                  />
                  <SocialLink 
                    href="https://www.linkedin.com/in/paul-agbogun01/"
                    icon={<Linkedin className="w-6 h-6 text-gray-700" />}
                  />
                  <SocialLink 
                    href="https://x.com/theactual001"
                    icon={<Twitter className="w-6 h-6 text-gray-700" />}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <InputField
                label="Name"
                name="name"
                placeholder="Your name"
                register={register}
                error={errors.name?.message}
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="paul.agbogun@gmail.com"
                register={register}
                error={errors.email?.message}
              />
              <InputField
                label="Subject"
                name="subject"
                placeholder="What's this about?"
                register={register}
                error={errors.subject?.message}
              />
              <InputField
                label="Message"
                name="message"
                placeholder="Your message here..."
                textarea
                register={register}
                error={errors.message?.message}
              />

              {submitStatus && (
                <Alert variant={submitStatus}>
                  {submitStatus === 'success'
                    ? "Message sent successfully! I'll get back to you soon."
                    : 'There was an error sending your message. Please try again.'}
                </Alert>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;