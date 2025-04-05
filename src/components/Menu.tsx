
import React, { useState, useRef, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const menuData: MenuCategory[] = [
    {
      category: "starters",
      items: [
        {
          name: "Antipasto Misto",
          description: "Selection of Italian cured meats, cheeses, and marinated vegetables",
          price: "€14.50"
        },
        {
          name: "Carpaccio di Manzo",
          description: "Thinly sliced beef with arugula, Parmigiano-Reggiano, and truffle oil",
          price: "€16.00"
        },
        {
          name: "Caprese di Bufala",
          description: "Buffalo mozzarella with heirloom tomatoes, fresh basil, and aged balsamic",
          price: "€12.00"
        },
        {
          name: "Bruschetta al Pomodoro",
          description: "Grilled bread topped with diced tomatoes, garlic, basil, and extra virgin olive oil",
          price: "€9.50"
        }
      ]
    },
    {
      category: "pasta",
      items: [
        {
          name: "Tagliatelle al Tartufo",
          description: "Handmade tagliatelle with black truffle cream sauce and Parmigiano-Reggiano",
          price: "€24.00"
        },
        {
          name: "Ravioli di Aragosta",
          description: "Lobster-filled ravioli with saffron cream sauce and seafood reduction",
          price: "€26.50"
        },
        {
          name: "Risotto ai Funghi Porcini",
          description: "Carnaroli rice with porcini mushrooms, white wine, and aged Parmigiano-Reggiano",
          price: "€22.00"
        },
        {
          name: "Spaghetti alle Vongole",
          description: "Spaghetti with fresh clams, white wine, garlic, chili, and parsley",
          price: "€20.00"
        }
      ]
    },
    {
      category: "mains",
      items: [
        {
          name: "Filetto di Manzo",
          description: "Prime beef tenderloin with red wine reduction, truffle mashed potatoes, and seasonal vegetables",
          price: "€34.00"
        },
        {
          name: "Branzino al Forno",
          description: "Oven-baked sea bass with Sicilian caponata, herb oil, and lemon",
          price: "€29.50"
        },
        {
          name: "Costolette d'Agnello",
          description: "Herb-crusted lamb chops with rosemary jus, polenta, and grilled vegetables",
          price: "€32.00"
        },
        {
          name: "Osso Buco alla Milanese",
          description: "Slow-braised veal shanks with gremolata and saffron risotto",
          price: "€30.00"
        }
      ]
    },
    {
      category: "desserts",
      items: [
        {
          name: "Tiramisù Classico",
          description: "Traditional tiramisu with mascarpone cream, espresso, and cocoa",
          price: "€10.00"
        },
        {
          name: "Panna Cotta al Bergamotto",
          description: "Vanilla panna cotta with bergamot citrus and candied pistachios",
          price: "€9.50"
        },
        {
          name: "Torta al Cioccolato",
          description: "Warm chocolate cake with hazelnut gelato and amarena cherries",
          price: "€11.00"
        },
        {
          name: "Cannoli Siciliani",
          description: "Crispy pastry tubes filled with sweetened ricotta, candied orange, and pistachios",
          price: "€10.50"
        }
      ]
    },
    {
      category: "wine",
      items: [
        {
          name: "Barolo DOCG",
          description: "Piedmont, Italy - Rich and robust with notes of cherry, leather, and spice",
          price: "€95.00"
        },
        {
          name: "Brunello di Montalcino",
          description: "Tuscany, Italy - Full-bodied with complex aromas of red fruit, tobacco, and herbs",
          price: "€85.00"
        },
        {
          name: "Gavi di Gavi",
          description: "Piedmont, Italy - Crisp white with notes of green apple, citrus, and minerals",
          price: "€55.00"
        },
        {
          name: "Prosecco Superiore DOCG",
          description: "Veneto, Italy - Elegant sparkling wine with fine bubbles and fresh fruit notes",
          price: "€45.00"
        }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg text-primary mb-4">Our Menu</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the authentic flavors of Italy with our carefully crafted menu,
            featuring traditional favorites and innovative specialties prepared with the
            finest seasonal ingredients.
          </p>
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <Tabs defaultValue="starters" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 md:grid-cols-5 gap-1">
                <TabsTrigger value="starters" className="font-playfair">Starters</TabsTrigger>
                <TabsTrigger value="pasta" className="font-playfair">Pasta</TabsTrigger>
                <TabsTrigger value="mains" className="font-playfair">Main Courses</TabsTrigger>
                <TabsTrigger value="desserts" className="font-playfair">Desserts</TabsTrigger>
                <TabsTrigger value="wine" className="font-playfair">Wine</TabsTrigger>
              </TabsList>
            </div>

            {menuData.map((category) => (
              <TabsContent key={category.category} value={category.category} className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="p-6 border border-border rounded-lg hover:shadow-md transition-all bg-card"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-playfair font-semibold text-xl">{item.name}</h3>
                        <span className="text-primary font-playfair font-semibold">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}

            <div className="text-center mt-12">
              <a
                href="#"
                className="btn-outline inline-flex items-center"
                onClick={(e) => e.preventDefault()}
              >
                Download Full Menu
              </a>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Menu;
