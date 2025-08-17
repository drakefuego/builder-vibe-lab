import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation, ArrowLeft, Clock, DollarSign, Bus, MapPin, Star } from "lucide-react";

interface RouteOption {
  id: string;
  fare: string;
  duration: string;
  buses: string[];
  stops: string[];
  walkingTime: string;
  rating: number;
}

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const fromLocation = searchParams.get("from") || "";
  const toLocation = searchParams.get("to") || "";
  const [routes, setRoutes] = useState<RouteOption[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call for route data
    setTimeout(() => {
      setRoutes([
        {
          id: "1",
          fare: "$3.25",
          duration: "45 min",
          buses: ["Bus 42", "Bus 15"],
          stops: ["Central Station", "Main St & 5th", "University Plaza", "Downtown Hub"],
          walkingTime: "8 min",
          rating: 4.5,
        },
        {
          id: "2",
          fare: "$2.75",
          duration: "52 min",
          buses: ["Bus 28", "Bus 9"],
          stops: ["Central Station", "Park Ave", "Shopping Center", "Metro Plaza", "Downtown Hub"],
          walkingTime: "12 min",
          rating: 4.2,
        },
        {
          id: "3",
          fare: "$4.50",
          duration: "38 min",
          buses: ["Express 101"],
          stops: ["Central Station", "Express Hub", "Downtown Hub"],
          walkingTime: "5 min",
          rating: 4.8,
        },
      ]);
      setLoading(false);
    }, 1500);
  }, [fromLocation, toLocation]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-mesh">
        <header className="bg-white/10 backdrop-blur-lg border-b border-white/20">
          <div className="container mx-auto px-4 py-4 flex items-center">
            <Link to="/" className="flex items-center text-white/80 hover:text-white mr-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-purple rounded-lg flex items-center justify-center">
                <Navigation className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">RouteMate</h1>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-spin">
            <Navigation className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Finding Best Routes...</h2>
          <p className="text-white/80">
            Searching from <span className="font-semibold">{fromLocation}</span> to{" "}
            <span className="font-semibold">{toLocation}</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-mesh">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-white/80 hover:text-white mr-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-purple rounded-lg flex items-center justify-center">
                <Navigation className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">RouteMate</h1>
            </div>
          </div>
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Account
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Trip Summary */}
        <Card className="mb-8 bg-white/95 backdrop-blur-lg border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-route-800">Your Journey</CardTitle>
                <CardDescription className="flex items-center mt-2">
                  <MapPin className="w-4 h-4 mr-1 text-route-500" />
                  <span className="font-medium">{fromLocation}</span>
                  <span className="mx-2 text-route-400">→</span>
                  <span className="font-medium">{toLocation}</span>
                </CardDescription>
              </div>
              <Button variant="outline" className="border-route-200 text-route-700">
                New Search
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* Route Options */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white mb-4">Route Options</h2>
          
          {routes.map((route, index) => (
            <Card key={route.id} className="bg-white/95 backdrop-blur-lg border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-route-800">{route.fare}</div>
                      <div className="text-sm text-route-600">Total Fare</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-route-800">{route.duration}</div>
                      <div className="text-sm text-route-600">Travel Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-route-800">{route.walkingTime}</div>
                      <div className="text-sm text-route-600">Walking</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center mb-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                      <span className="font-semibold">{route.rating}</span>
                    </div>
                    {index === 0 && (
                      <Badge className="bg-route-600 text-white">Recommended</Badge>
                    )}
                  </div>
                </div>

                {/* Buses */}
                <div className="mb-4">
                  <h4 className="font-semibold text-route-800 mb-2 flex items-center">
                    <Bus className="w-4 h-4 mr-2" />
                    Buses to Take
                  </h4>
                  <div className="flex space-x-2">
                    {route.buses.map((bus, idx) => (
                      <Badge key={idx} variant="outline" className="border-route-300 text-route-700">
                        {bus}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Stops */}
                <div className="mb-4">
                  <h4 className="font-semibold text-route-800 mb-2 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Key Stops
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {route.stops.map((stop, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-route-100 text-route-800">
                        {stop}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-route-200">
                  <div className="flex items-center text-sm text-route-600">
                    <Clock className="w-4 h-4 mr-1" />
                    Estimated departure: Every 10-15 minutes
                  </div>
                  <Button className="bg-gradient-purple text-white hover:opacity-90">
                    Choose This Route
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tips Section */}
        <Card className="mt-8 bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Travel Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 text-white/90">
              <div>
                <h4 className="font-semibold mb-2">💡 Save Money</h4>
                <p className="text-sm">Consider getting a day pass for $8.50 if you plan multiple trips today.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">⏰ Peak Hours</h4>
                <p className="text-sm">Avoid 7-9 AM and 5-7 PM for less crowded buses.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
