import requests
from bs4 import BeautifulSoup

URL = 'https://www.amazon.de/gp/product/B07H6YYNXC/ref=ox_sc_act_title_4?smid=A133RA3ZUAU4I7&psc=1'

headers = {"User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:67.0) Gecko/20100101 Firefox/67.0'}

def check_price():

  page = requests.get(URL, headers=headers)

  soup = BeautifulSoup(page.content, 'html.parser')

  price = soup.find(id="priceblock_ourprice").get_text()
  converted_price = float(price[0:3])

  if (converted_price < 150):
    send_mail()

  print(converted_price)

def send_mail():
  