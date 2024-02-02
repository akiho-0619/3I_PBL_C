from bs4 import BeautifulSoup
import urllib.request as req
import urllib
import os
import time
from urllib.parse import urljoin
from pathlib import Path

def scr(url):
    #a-tagを抽出
    res = req.urlopen(url)
    soup = BeautifulSoup(res, "html.parser")
    result = soup.select("a[href]")
    #print(result)

    #a-tagからリンクを抽出
    link_list =[]
    for link in result:
        href = link.get("href")
        link_list.append(href)
    #print(link_list)

    #pdfファイルのみにする
    pdf_list = [temp for temp in link_list if temp.endswith('pdf')]
    print(pdf_list)
    
    #URLの相対パスを絶対パスにする
    abs_dbpdf_list = []
    for relative in pdf_list:
        temp_url = urljoin(url, relative)
        abs_dbpdf_list.append(temp_url)
    print(abs_dbpdf_list)

    #ファイル名を取得
    file_name_list=[os.path.basename(i) for i in abs_dbpdf_list] 

    #ファイル名をフルパスにする
    savepath_list=[Path(r"module\pdf\\"+ i).resolve() for i in file_name_list]
    """
    #target_dir = "C:\\Users\\makky\\Downloads\\DB"
    savepath_list = []
    for filename in file_name_list:
        savepath_list.append(os.path.join(target_dir, filename))
    print(savepath_list)
    """
    
    #ダウンロード実行
    for (pdflink, savepath) in zip(abs_dbpdf_list, savepath_list):
        urllib.request.urlretrieve(pdflink, savepath)
        time.sleep(2)
    
        

#url="https://www.ktc.ac.jp/dept/kyomu/schedule/"
#scr(url)