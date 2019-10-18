import requests
from bs4 import BeautifulSoup
from random import choice
from threading import Thread
import unicodedata
import time
from time import sleep
import mysql.connector
import concurrent.futures
from concurrent.futures import ThreadPoolExecutor
import math
import datetime
from mysql.connector import Error

start = time.time()

def get_proxy():
    url = "http://www.sslproxies.org/"
    r = requests.get(url)
    soup = BeautifulSoup(r.content, 'html5lib')
    lijstje = {'http': choice(list(map(lambda x:x[0]+':'+x[1], list(zip(map(lambda x:x.text, soup.findAll('td')[::8]), map(lambda x:x.text, soup.findAll('td')[1::8]))))))}
    return lijstje



#print(get_proxy())

def proxy_request(request_type, url, **kwargs):
    while 1:
        try:
            proxy = get_proxy()
            print(proxy)
            r = requests.request(request_type, url, proxies=proxy, timeout=7, **kwargs)
            break
        except Exception as e:
            logging.error("Exception occurred", exc_info=True)
            pass
    return r

#file = open('producten.txt')
#all_lines = file.readlines()


def doe_iets(ids):
    try:
        mydb = mysql.connector.connect(
            host="localhost",
            user="root",
            passwd="",
            database="shopping"
        )
        mycursor = mydb.cursor()
    except:
        print('connectie mislukt!')


    for h in ids:
        if h == "":
            return

        print(h+' = ean')

        try:
            mycursor.execute("SELECT * FROM products")
            checkedDate = mycursor.fetchall()

        except:
            print('Select datum is mislukt!')
       

        #i=0
        eanCode = str(h)
        current_time = datetime.datetime.today().strftime("%Y-%m-%d")


        print(checkedDate+'--------')
        if current_time != checkedDate['controleDatum']:
            try:
                print('test')
                mycursor.execute ('''
                UPDATE products
                SET controleDatum=%s
                WHERE ean=%s
                ''', (current_time, eanCode))
            except Exception as e:
                logging.error("Exception occurred", exc_info=True)
   




       

        #controlDate = '2019-10-17'
        #try:
            #print('iiiiiiiiiiiiiiiiiffds')
            #sql21 = "UPDATE products SET controleDatum = %s WHERE ean = %s"
            #val21 = (controlDate, str(eanCode))
            #mycursor.execute(sql21, val21)
        #except:
            #print('fdsfdffds')
            #pass




        #Komt EAN al voor  in products table? Dan skippen en door naar volgende EAN
        #Staat hij erin met een andere datum? Dan datum aanpassen en prijzen ophalen (oude verwijderen)




        # als ean al bestaat EN als datum gelijk moet je dat doen

        sqlikPro = "INSERT INTO products(ean, product_naam, controleDatum) VALUES (%s, %s, %s)"
        valikPro = (eanCode, str(h), str(controlDate))
        mycursor.execute(sqlikPro, valikPro)
        mydb.commit()
        main_page = 'https://www.google.com/search?tbm=shop&q='+str(nummerEA[1])+'&oq='+str(nummerEA[1])+'#spd=12189184438443279159'
        page_to_search = main_page+str(nummerEA[1])+'&source=lnms&hl=nl&tbm=shop&sa='
        source_code = proxy_request('get',page_to_search)
        plain_text = source_code.text
        soup = BeautifulSoup(plain_text, features="html.parser")
        number = 0
        for title in soup.find_all('a'):
            if str.__contains__(title['href'], '/shopping/product/'):
                link = title['href']
                #print(number)
                number+=1
                if number == 2:
                    break    # break here
        google_product_url = 'https://www.google.com' + link
        source_code = proxy_request('get',google_product_url)
        soup2 = BeautifulSoup(source_code.text, 'html.parser')
        product_list = soup2.find_all('tr', class_='os-row')
        product_name = soup2.find('title').text
        for product in product_list:
            product_list = product.find_all('tr', class_='os-row')
            total_price = product.find('td', class_='os-total-col').text
            if total_price == '':
                total_price = product.find('td', class_='os-total-description').text
            competitor = product.find('span', class_='os-seller-name-primary').text,
            product_price = unicodedata.normalize(u'NFKD',total_price).replace(" € ", ""),
            shipping1 = product.find('span', class_='os-total-description').text
            shipping = unicodedata.normalize(u'NFKD',shipping1).replace(" verzendkosten", ""),
            if shipping == '':
                shipping = 'Gratis verzendng',

            verkoperURL = product.find('span', class_='os-seller-name-primary').a['href']
            data = {
                    'product_naam': product_name,
                    'seller_name': competitor[0],
                    'total_price': product_price[0],
                    'shipping': shipping,
                    'seller_url': verkoperURL
            }



            sqlInPri = "INSERT INTO prices(product_id, compatitor, prijs, shipping, url) VALUES (%s, %s, %s, %s, %s)"
            valInPri = (str(nsid[0][0]), str(competitor[0]), str(product_price[0]), str(shipping[0]), str(verkoperURL))
            mycursor.execute(sqlInPri, valInPri)
            mydb.commit()


start = time.time()

#EAN ophalen
nummerEA = []
filepath = 'producten.txt'
cnt = 1
with open(filepath) as fp:
   line = fp.readline()
   # full_text = []
   while line:
       #print("Line {}: {}".format(cnt, line.strip()))
       line = fp.readline()
       # full_text
       #print(line.strip('\n'))
       nummerEA.append(line.strip('\n'))
       cnt += 1


#num_lines = sum(1 for line in open('producten.txt'))
chunk_size = 1
number_of_chunks = math.ceil(cnt/chunk_size)
executor = ThreadPoolExecutor(max_workers=number_of_chunks)
futures = []
for i in range(number_of_chunks):
    chunk = nummerEA[i*chunk_size:(i+1)*chunk_size]
    futures.append(executor.submit(doe_iets, chunk))
    #print(chunk) # Zelde als voorbeeldthread

for future in concurrent.futures.as_completed(futures):
    pass

print('Time:', time.time() - start)




'''x = 1
loop = num_lines / 10
while x < loop:
    t+x = Thread(target=timer, args=('t'+x, 2, x))
    t+x.start()
    x += 1'''