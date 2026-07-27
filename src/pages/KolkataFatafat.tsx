import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, TrendingUp, Gift, Zap } from 'lucide-react';

interface DrawResult {
  draw: number;
  time: string;
  result: string;
  patti: string;
}

interface HistoricalData {
  date: string;
  draws: DrawResult[];
}

const KolkataFatafat = () => {
  const [currentResults, setCurrentResults] = useState<DrawResult[]>([
    { draw: 1, time: '10:12 AM', result: '135', patti: '9' },
    { draw: 2, time: '11:43 AM', result: '379', patti: '9' },
    { draw: 3, time: '01:14 PM', result: '378', patti: '8' },
    { draw: 4, time: '02:45 PM', result: '699', patti: '4' },
    { draw: 5, time: '04:16 PM', result: '249', patti: '5' },
    { draw: 6, time: '05:47 PM', result: 'Pending', patti: '-' },
    { draw: 7, time: '07:18 PM', result: 'Pending', patti: '-' },
    { draw: 8, time: '08:49 PM', result: 'Pending', patti: '-' },
  ]);

  const [historicalData] = useState<HistoricalData[]>([
    {
      date: '26 July 2026',
      draws: [
        { draw: 1, time: '10:12 AM', result: '670', patti: '3' },
        { draw: 2, time: '11:43 AM', result: '250', patti: '7' },
        { draw: 3, time: '01:14 PM', result: '399', patti: '1' },
        { draw: 4, time: '02:45 PM', result: '788', patti: '3' },
      ],
    },
    {
      date: '25 July 2026',
      draws: [
        { draw: 1, time: '10:12 AM', result: '247', patti: '3' },
        { draw: 2, time: '11:43 AM', result: '889', patti: '5' },
        { draw: 3, time: '01:14 PM', result: '140', patti: '5' },
        { draw: 4, time: '02:45 PM', result: '236', patti: '1' },
        { draw: 5, time: '04:16 PM', result: '123', patti: '6' },
        { draw: 6, time: '05:47 PM', result: '455', patti: '4' },
        { draw: 7, time: '07:18 PM', result: '359', patti: '7' },
        { draw: 8, time: '08:49 PM', result: '880', patti: '6' },
      ],
    },
  ]);

  const timeTable = [
    { draw: 1, time: '10:12 AM' },
    { draw: 2, time: '11:43 AM' },
    { draw: 3, time: '01:14 PM' },
    { draw: 4, time: '02:45 PM' },
    { draw: 5, time: '04:16 PM' },
    { draw: 6, time: '05:47 PM' },
    { draw: 7, time: '07:18 PM' },
    { draw: 8, time: '08:49 PM' },
  ];

  const luckyNumbers = [7, 3, 9, 5, 1, 8, 2, 4, 6, 0];
  const tips = [
    { title: 'Single', description: 'Pick any single digit 0-9' },
    { title: 'Patti', description: 'Pick two digits combination' },
    { title: 'Jodi', description: 'Two digit pair betting' },
    { title: 'Panna', description: 'Three digit combinations' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
          🙏 Kolkata Fatafat 🙏
        </h1>
        <p className="text-slate-600 text-lg">Sabse Pahle Result - Live Updates</p>
        <p className="text-red-600 font-semibold mt-2">
          ⚠️ Don't Pay Money For Tips - All Tips Are Free
        </p>
      </div>

      {/* Live Results Section */}
      <Card className="mb-8 border-2 border-red-200 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-6 h-6" />
            Live Results - 27 July 2026
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentResults.map((result) => (
              <div
                key={result.draw}
                className={`p-4 rounded-lg border-2 transition-all ${
                  result.result === 'Pending'
                    ? 'bg-slate-50 border-slate-200'
                    : 'bg-gradient-to-br from-green-50 to-green-100 border-green-300'
                }`}
              >
                <div className="text-sm font-semibold text-slate-600 mb-1">
                  Baji {result.draw}
                </div>
                <div className="text-xs text-slate-500 mb-3">{result.time}</div>
                <div className="flex items-end gap-3">
                  <div className="text-3xl font-bold text-slate-900">
                    {result.result}
                  </div>
                  <div className="text-2xl font-bold text-red-600 mb-1">
                    {result.patti}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs defaultValue="timetable" className="mb-8">
        <TabsList className="grid w-full grid-cols-4 bg-slate-200">
          <TabsTrigger value="timetable">Time Table</TabsTrigger>
          <TabsTrigger value="tips">Tips</TabsTrigger>
          <TabsTrigger value="lucky">Lucky Numbers</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        {/* Time Table Tab */}
        <TabsContent value="timetable" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Draw Time Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {timeTable.map((item) => (
                  <div
                    key={item.draw}
                    className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200"
                  >
                    <div className="font-semibold text-blue-900">
                      Baji {item.draw}
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mt-2">
                      {item.time}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600 mt-6 p-4 bg-slate-100 rounded">
                📌 Results declared 8 times daily (Monday-Saturday)
                <br />
                📌 On Sundays: 4 times, ending by 3:00 PM
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tips Tab */}
        <TabsContent value="tips" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                How To Play - Tips & Tricks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tips.map((tip, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200"
                  >
                    <h3 className="font-bold text-purple-900 mb-2">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-purple-700">{tip.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-sm text-slate-700">
                  💰 <strong>Winning Multiplier:</strong> Multiply by 9
                  <br />
                  💵 <strong>Bid Range:</strong> ₹10 to ₹1 Lakh
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Lucky Numbers Tab */}
        <TabsContent value="lucky" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="w-5 h-5" />
                Lucky Numbers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {luckyNumbers.map((num) => (
                  <div
                    key={num}
                    className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full text-2xl font-bold text-yellow-900 shadow-md hover:shadow-lg transition-shadow"
                  >
                    {num}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-600 mt-6 p-4 bg-slate-100 rounded">
                🎰 These are today's lucky numbers based on historical patterns.
                <br />
                Remember: Kolkata Fatafat is a game of chance. Play responsibly!
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* History Tab */}
        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Results History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {historicalData.map((dayData, idx) => (
                  <div key={idx}>
                    <h3 className="font-bold text-slate-900 mb-3">
                      📅 {dayData.date}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                      {dayData.draws.map((draw) => (
                        <div
                          key={draw.draw}
                          className="p-3 bg-slate-50 rounded border border-slate-200"
                        >
                          <div className="text-xs text-slate-500">
                            Baji {draw.draw}
                          </div>
                          <div className="text-sm font-semibold text-slate-900 mt-1">
                            {draw.result}
                          </div>
                          <div className="text-xs text-red-600 font-bold mt-1">
                            Patti: {draw.patti}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Footer Info */}
      <Card className="bg-slate-800 text-white border-0">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold mb-2">📍 About Kolkata Fatafat</h3>
              <p className="text-sm text-slate-300">
                Founded in 1951, Kolkata Fatafat is a popular lottery game in
                Bally, West Bengal, India.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">🎮 Game Info</h3>
              <p className="text-sm text-slate-300">
                Also known as: Kolkata FF, KK FF, BKN, Satta Matka
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">⚠️ Disclaimer</h3>
              <p className="text-sm text-slate-300">
                This is for informational purposes. Play responsibly!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KolkataFatafat;
