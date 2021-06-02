import billboard

# chart = billboard.ChartData('hot-100')

# chart = billboard.ChartData('hot-100', year=2020)
chart = billboard.ChartData('alternative-songs', year=2006)
print(chart.title)
# print(chart)
song = chart[0]
print(song.title, song.artist)