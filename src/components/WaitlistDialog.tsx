
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, User, Mail, Phone } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from 'lucide-react';

// List of country codes
const countryCodes = [
  { code: '+1', label: 'US (+1)' },
  { code: '+57', label: 'CO (+57)' },
  { code: '+55', label: 'BR (+55)' },
  { code: '+34', label: 'ES (+34)' },
  { code: '+52', label: 'MX (+52)' },
  { code: '+54', label: 'AR (+54)' },
  { code: '+56', label: 'CL (+56)' },
  { code: '+51', label: 'PE (+51)' },
  { code: '+58', label: 'VE (+58)' },
  { code: '+593', label: 'EC (+593)' },
];

// Interest options
const interestOptions = [
  { value: 'hotel', label: 'Hotel Management' },
  { value: 'agency', label: 'Travel Agency' },
  { value: 'destination', label: 'Destination Management' },
  { value: 'other', label: 'Other' },
];

interface WaitlistDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WaitlistDialog: React.FC<WaitlistDialogProps> = ({ open, onOpenChange }) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+57', // Default to Colombia
    fullPhone: '',
    interest: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email) {
      toast({
        title: t('waitlist.error'),
        description: t('waitlist.errorRequired'),
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    
    try {
      // Create the phone in international format
      const phone = formData.fullPhone.replace(/\D/g, ''); // Remove non-digits
      
      // Call the Supabase function to add to waitlist
      const { error } = await supabase.rpc('add_to_waitlist', {
        p_name: formData.name,
        p_email: formData.email,
        p_country_code: formData.countryCode,
        p_phone: phone,
        p_interest: formData.interest,
        p_full_phone: formData.fullPhone
      });
      
      if (error) throw error;
      
      toast({
        title: t('waitlist.success'),
        description: t('waitlist.successMessage')
      });
      
      // Reset form and close modal
      setFormData({
        name: '',
        email: '',
        countryCode: '+57',
        fullPhone: '',
        interest: ''
      });
      
      onOpenChange(false);
      
    } catch (error) {
      console.error('Error submitting waitlist form:', error);
      toast({
        title: t('waitlist.error'),
        description: t('waitlist.errorMessage'),
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    { icon: Check, text: t('waitlist.benefit1') },
    { icon: Check, text: t('waitlist.benefit2') },
    { icon: Check, text: t('waitlist.benefit3') }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left side: Benefits */}
          <div className="bg-primary text-white p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6">{t('waitlist.joinTitle')}</h2>
            <p className="text-gray-200 mb-8">{t('waitlist.joinSubtitle')}</p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-white rounded-full flex items-center justify-center mr-3">
                    <benefit.icon className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-gray-200">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right side: Form */}
          <div className="p-8">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">{t('waitlist.formTitle')}</DialogTitle>
              <DialogDescription>
                {t('waitlist.formDescription')}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">{t('waitlist.nameLabel')}</label>
                <div className="relative">
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('waitlist.namePlaceholder')}
                    className="pl-10"
                    required
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">{t('waitlist.emailLabel')}</label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('waitlist.emailPlaceholder')}
                    className="pl-10"
                    required
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium">{t('waitlist.phoneLabel')}</label>
                <div className="flex gap-2">
                  <Select
                    value={formData.countryCode}
                    onValueChange={(value) => handleSelectChange('countryCode', value)}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder={t('waitlist.selectCountry')} />
                    </SelectTrigger>
                    <SelectContent>
                      {countryCodes.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <div className="relative flex-1">
                    <Input
                      id="fullPhone"
                      value={formData.fullPhone}
                      onChange={handleChange}
                      placeholder={t('waitlist.phonePlaceholder')}
                      className="pl-10 flex-1"
                    />
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="block text-sm font-medium">{t('waitlist.interestLabel')}</label>
                <Select
                  value={formData.interest}
                  onValueChange={(value) => handleSelectChange('interest', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('waitlist.interestPlaceholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    {interestOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {t(`waitlist.interests.${option.value}`)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                className="w-full mt-6" 
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t('waitlist.submitting')}
                  </>
                ) : (
                  t('waitlist.submit')
                )}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;
