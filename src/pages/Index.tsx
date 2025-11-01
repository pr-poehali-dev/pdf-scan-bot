import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const features = [
    {
      icon: 'FileText',
      title: 'Конвертация PDF',
      description: 'Преобразуйте любые документы в PDF и обратно за секунды',
      color: 'from-primary to-secondary'
    },
    {
      icon: 'Scan',
      title: 'Умное сканирование',
      description: 'Создавайте профессиональные сканы с автокоррекцией и улучшением',
      color: 'from-secondary to-accent'
    },
    {
      icon: 'Zap',
      title: 'Мгновенная обработка',
      description: 'Результат готов за пару секунд прямо в Telegram',
      color: 'from-accent to-primary'
    }
  ];

  const faqItems = [
    {
      question: 'Какие форматы поддерживает бот?',
      answer: 'Бот работает с PDF, JPEG, PNG, DOCX и многими другими популярными форматами документов.'
    },
    {
      question: 'Насколько это безопасно?',
      answer: 'Все документы обрабатываются с шифрованием и автоматически удаляются после конвертации. Мы не храним ваши файлы.'
    },
    {
      question: 'Есть ли ограничения на размер файлов?',
      answer: 'Бесплатная версия позволяет обрабатывать файлы до 20 МБ. В премиум-версии лимит увеличен до 100 МБ.'
    },
    {
      question: 'Как начать использовать бота?',
      answer: 'Просто найдите бота в Telegram, нажмите "Старт" и отправьте ваш документ. Бот сам подскажет дальнейшие действия.'
    },
    {
      question: 'Сколько стоит использование?',
      answer: 'Базовые функции бесплатны. Премиум-подписка с расширенными возможностями стоит 299₽/месяц.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { email, message });
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Icon name="FileText" size={24} className="text-white" />
            </div>
            <span className="font-heading font-bold text-xl">DocBot</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#features" className="hover:text-primary transition-colors">Возможности</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Открыть бота
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-heading font-black text-5xl md:text-7xl mb-6 leading-tight">
                <span className="gradient-text">Умный бот</span>
                <br />
                для ваших
                <br />
                документов
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Конвертируйте PDF и создавайте профессиональные сканы прямо в Telegram за пару кликов
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow hover-lift">
                  <Icon name="Send" size={20} className="mr-2" />
                  Начать в Telegram
                </Button>
                <Button size="lg" variant="outline" className="hover-lift">
                  <Icon name="Play" size={20} className="mr-2" />
                  Как работает
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl animate-pulse-glow" />
              <img 
                src="https://cdn.poehali.dev/projects/b9443622-9fdc-41a3-b1c8-e1c8a0a51797/files/0f6c263a-2e96-4724-8d77-d6831a539c5b.jpg" 
                alt="PDF конвертация"
                className="relative rounded-2xl w-full animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl md:text-5xl mb-4">
              Возможности бота
            </h2>
            <p className="text-xl text-muted-foreground">
              Всё необходимое для работы с документами в одном месте
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-card border-2 border-border hover:border-primary transition-all duration-300 hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon name={feature.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/b9443622-9fdc-41a3-b1c8-e1c8a0a51797/files/030335e3-f862-463e-8c67-b00c13baf19b.jpg" 
                alt="Telegram бот"
                className="rounded-2xl w-full"
              />
            </div>
            <div>
              <h2 className="font-heading font-black text-4xl md:text-5xl mb-6">
                Работает прямо в <span className="gradient-text">Telegram</span>
              </h2>
              <ul className="space-y-4">
                {[
                  'Не нужно устанавливать приложения',
                  'Быстрая обработка без очередей',
                  'Результат приходит мгновенно',
                  'Работает на всех устройствах'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Check" size={16} className="text-white" />
                    </div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="mt-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 hover-lift">
                Попробовать сейчас
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl md:text-5xl mb-4">
              Частые вопросы
            </h2>
            <p className="text-xl text-muted-foreground">
              Всё, что нужно знать о боте
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border-2 border-border rounded-xl px-6 hover:border-primary transition-colors"
              >
                <AccordionTrigger className="font-heading font-bold text-lg hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl md:text-5xl mb-4">
              Остались вопросы?
            </h2>
            <p className="text-xl text-muted-foreground">
              Напишите нам, и мы обязательно ответим
            </p>
          </div>
          <Card className="bg-card border-2 border-border max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-background border-2"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Ваш вопрос или предложение..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="bg-background border-2"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 hover-lift"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Icon name="FileText" size={24} className="text-white" />
                </div>
                <span className="font-heading font-bold text-xl">DocBot</span>
              </div>
              <p className="text-muted-foreground">
                Умный Telegram-бот для работы с документами
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold mb-4">Навигация</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold mb-4">Соцсети</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="hover-lift">
                  <Icon name="Send" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="hover-lift">
                  <Icon name="Github" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="hover-lift">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 DocBot. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
