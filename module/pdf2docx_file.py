from pdf2docx.main import parse
f=r"C:\Users\aki19\Downloads" + "\\"
pdf_file = r"2023_yotei_zenki.pdf"
docx_file = 'output.docx'

parse(f + pdf_file, f + docx_file)