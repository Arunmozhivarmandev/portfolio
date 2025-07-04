'use client';

import type React from 'react';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { X, Mail, User, MessageSquare, Send, Phone } from 'lucide-react';
import { gsap } from 'gsap';

export default function ContactPopup() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const overlayRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const formElementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Set initial states
      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set(popupRef.current, { scale: 0.8, opacity: 0, y: 50 });
      gsap.set(formElementsRef.current?.children || [], { opacity: 0, y: 20 });

      // Animate in
      const tl = gsap.timeline();
      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
        .to(
          popupRef.current,
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'back.out(1.7)',
          },
          '-=0.1',
        )
        .to(
          formElementsRef.current?.children || [],
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.1,
            ease: 'power2.out',
          },
          '-=0.2',
        );
    }
  }, [isOpen]);

  const closePopup = () => {
    const tl = gsap.timeline({
      onComplete: () => setIsOpen(false),
    });

    tl.to(formElementsRef.current?.children || [], {
      opacity: 0,
      y: -20,
      duration: 0.2,
      stagger: 0.05,
      ease: 'power2.in',
    })
      .to(
        popupRef.current,
        {
          scale: 0.8,
          opacity: 0,
          y: 50,
          duration: 0.3,
          ease: 'back.in(1.7)',
        },
        '-=0.1',
      )
      .to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.2,
          ease: 'power2.in',
        },
        '-=0.1',
      );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/sendmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus('Message sent!');
      setForm({ name: '', phone: '', message: '' });
      gsap.to(popupRef.current, {
        scale: 1.05,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut',
      });
    } else {
      setError('Failed to send message');
    }

    setLoading(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl"
        size="icon"
      >
        <Mail className="h-6 w-6" />
      </Button>

      {/* Popup Overlay */}
      {isOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={closePopup}
        >
          {/* Popup Container */}
          <div
            ref={popupRef}
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glassmorphism Card */}
            <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md">
              {/* Gradient Background */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent" />

              {/* Content */}
              <div className="relative p-8">
                {/* Close Button */}
                <button
                  onClick={closePopup}
                  className="absolute right-4 top-4 rounded-full bg-white/10 p-2 transition-colors duration-200 hover:bg-white/20"
                >
                  <X className="h-4 w-4 text-white" />
                </button>

                {/* Header */}
                <div className="mb-8 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="mb-2 text-2xl font-bold text-white">
                    Get In Touch
                  </h2>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div ref={formElementsRef} className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="flex items-center gap-2 text-white/90"
                      >
                        <User className="h-4 w-4" />
                        Name
                      </Label>
                      <Input
                        id="name"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Your full name"
                        className="border-white/20 bg-white/10 text-white backdrop-blur-sm placeholder:text-white/50 focus:border-white/40 focus:ring-white/20"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="flex items-center gap-2 text-white/90"
                      >
                        <Phone className="h-4 w-4" />
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        type="text"
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        value={form.phone}
                        placeholder="Enter your Mobile Number"
                        className="border-white/20 bg-white/10 text-white backdrop-blur-sm placeholder:text-white/50 focus:border-white/40 focus:ring-white/20"
                        required
                      />
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="flex items-center gap-2 text-white/90"
                      >
                        <MessageSquare className="h-4 w-4" />
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Send me a message..."
                        rows={4}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className="resize-none border-white/20 bg-white/10 text-white backdrop-blur-sm placeholder:text-white/50 focus:border-white/40 focus:ring-white/20"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={loading}
                      className="h-12 w-full rounded-xl border-0 bg-gradient-to-r from-blue-500 to-purple-600 font-medium text-white transition-all duration-300 hover:from-blue-600 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      {loading ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                    {error && (
                      <p className="text-center text-red-500">{error}</p>
                    )}
                    {status && (
                      <p className="text-center text-green-500">{status}</p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
