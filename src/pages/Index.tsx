import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const features = [
    {
      icon: "Zap",
      title: "Высокая скорость загрузки",
      description: "Серверы с NVMe SSD и оптимизированным стеком обеспечивают молниеносную загрузку ваших сайтов"
    },
    {
      icon: "Settings",
      title: "Оптимизация серверов",
      description: "Автоматическая настройка PHP, MySQL и веб-сервера под нагрузку вашего проекта"
    },
    {
      icon: "Database",
      title: "Умное кэширование",
      description: "Многоуровневое кэширование Redis, Memcached и CDN для максимальной производительности"
    },
    {
      icon: "Shield",
      title: "Защита от DDoS",
      description: "Защита на уровне сети и приложений от всех типов атак"
    },
    {
      icon: "Globe",
      title: "CDN по всему миру",
      description: "Быстрая доставка контента из ближайшей точки присутствия"
    },
    {
      icon: "LineChart",
      title: "Мониторинг 24/7",
      description: "Постоянный контроль доступности и производительности сайтов"
    }
  ];

  const plans = [
    {
      name: "Стартовый",
      price: "299",
      description: "Для небольших проектов",
      features: ["10 GB SSD", "100 GB трафик", "1 домен", "Базовая поддержка", "SSL сертификат"],
      popular: false
    },
    {
      name: "Бизнес",
      price: "799",
      description: "Для растущих проектов",
      features: ["50 GB SSD", "500 GB трафик", "5 доменов", "Приоритетная поддержка", "Автобэкапы", "CDN"],
      popular: true
    },
    {
      name: "Профессиональный",
      price: "1499",
      description: "Для высоконагруженных сайтов",
      features: ["200 GB SSD", "Безлимитный трафик", "Безлимит доменов", "VIP поддержка 24/7", "Выделенные ресурсы", "Premium CDN"],
      popular: false
    }
  ];

  const portfolio = [
    {
      name: "IntechStore",
      category: "E-commerce",
      speed: "0.8s",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      name: "TechBlog",
      category: "Блог",
      speed: "0.5s",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80"
    },
    {
      name: "StartupHub",
      category: "Корпоративный сайт",
      speed: "0.6s",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
    }
  ];

  const docs = [
    { icon: "BookOpen", title: "Быстрый старт", desc: "Разверните сайт за 5 минут" },
    { icon: "Code", title: "API документация", desc: "Интеграция и автоматизация" },
    { icon: "Server", title: "Настройка серверов", desc: "Оптимизация производительности" },
    { icon: "LifeBuoy", title: "База знаний", desc: "Ответы на частые вопросы" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">Б</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">
              Бисквит
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">Возможности</a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">Тарифы</a>
            <a href="#docs" className="text-foreground/80 hover:text-foreground transition-colors">Документация</a>
            <a href="#portfolio" className="text-foreground/80 hover:text-foreground transition-colors">Портфолио</a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost">Войти</Button>
            <Button className="bg-gradient-to-r from-primary to-orange-600 hover:opacity-90" onClick={() => navigate("/dashboard")}>
              Начать бесплатно
            </Button>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
            <Icon name="Sparkles" size={14} className="mr-1" />
            Новое поколение хостинга
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-orange-500 to-orange-600 bg-clip-text text-transparent">
            Хостинг со скоростью света
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Революционная платформа для размещения сайтов с упором на производительность. 
            Загрузка страниц менее 1 секунды гарантирована.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-orange-600 hover:opacity-90 text-lg px-8 py-6" onClick={() => navigate("/dashboard")}>
              Попробовать бесплатно
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">&lt;1s</div>
              <div className="text-sm text-muted-foreground">Загрузка</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="container mx-auto px-4 py-20 bg-background">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4">Возможности</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Технологии будущего</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы используем передовые технологии для обеспечения максимальной производительности
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-orange-100 flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} size={24} className="text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="pricing" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4">Тарифы</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Выберите свой план</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Прозрачные цены без скрытых платежей. Все тарифы включают бесплатный SSL
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative ${plan.popular ? 'border-primary border-2 shadow-xl scale-105' : 'border-2'} transition-all duration-300 hover:shadow-lg`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-orange-600 text-white">
                    Популярный
                  </Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">₽/мес</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-orange-600' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Выбрать план
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section id="docs" className="container mx-auto px-4 py-20 bg-background">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4">Документация</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Начните за минуты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Подробная документация и примеры для быстрого старта
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {docs.map((doc, index) => (
            <Card 
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={doc.icon as any} size={24} className="text-secondary" />
                </div>
                <CardTitle className="text-lg">{doc.title}</CardTitle>
                <CardDescription>{doc.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section id="portfolio" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4">Портфолио</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Проекты наших клиентов</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Реальные результаты от реальных компаний
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolio.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon name="Gauge" size={16} className="text-primary" />
                  <span>Загрузка: <strong className="text-primary">{project.speed}</strong></span>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 bg-gradient-to-br from-primary/5 to-orange-50">
        <Card className="max-w-4xl mx-auto border-2 border-primary/20 shadow-2xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-3xl md:text-4xl mb-4">
              Готовы ускорить ваш сайт?
            </CardTitle>
            <CardDescription className="text-lg">
              Первые 14 дней бесплатно. Кредитная карта не требуется.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-orange-600 hover:opacity-90 text-lg px-8 py-6">
              Начать бесплатный период
              <Icon name="Rocket" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Связаться с нами
            </Button>
          </CardContent>
        </Card>
      </section>

      <footer className="bg-background border-t mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center">
                  <span className="text-white font-bold">Б</span>
                </div>
                <span className="text-xl font-bold">Бисквит</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Современный хостинг для современных проектов
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Документация</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Карьера</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Статус</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 Бисквит Хостинг. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;