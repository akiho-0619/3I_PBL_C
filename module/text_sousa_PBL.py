import re
with open(r"module\pdf\yotei.txt", "r", encoding="ANSI")as f:
    get_data=f.readlines()
text=[]
#print('"'+get_data[8][:len(get_data[8])-1]+'"')
#print('"'+get_data[11][:len(get_data[11])-1]+'"')
get_data=[i.replace("\n", "") for i in get_data]

marusuuji_list=[" ", "①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "⑪", "⑫", "⑬", "⑭", "⑮", "⑯","⑰", "⑱", "⑲", "⑳", "㉑", "㉒", "㉓", "㉔", "㉕", "㉖", "㉗", "㉘", "㉙", "㉚", "㉛", "㉜"]
maximum_day=[31,28,31,30,31,30,31,31,30,31,30,31]
add_text=""
index=0
del_count=0
month=""
final_day=True
other_text=[]
#for i in range(0, len(get_data), 3):
while index<len(get_data):
    if re.fullmatch(" *[0-9]+ *月.*", get_data[index]) and final_day:
        month=get_data[index].replace(" ", "").replace("月", "")
        del get_data[index+1]
        del get_data[index+2]
        index+=3
        continue

    try:
        get_data[index+2]= get_data[index+2].replace( marusuuji_list[marusuuji_list.index(get_data[index+2])], "")
        
    except (ValueError, TypeError):
        pass
    except IndexError:
        print(get_data[index+2])
    
    if get_data[index+2]!="":   #
        add_text="_".join( [get_data[index], get_data[index+1], get_data[index+2]])

    add_text="_".join( [get_data[index], get_data[index+1], get_data[index+2]])
    final_day=True if get_data[index].replace(" ", "")==str(maximum_day[int(month)-1]) else False    #最終日なら

    index+=3

    
    while not re.fullmatch(" *[0-9]+ *", get_data[index]):
        add_text+="_"+get_data[index]
        index+=1

    text.append(add_text)

    while not re.fullmatch(" *[0-9]+ *月.*", get_data[index]):
        if get_data[index] not in get_data:
            other_text.append(get_data[index])
            
        index+=1

        if index==len(get_data):
            break

    text+=other_text
    

"""
add_text=""
index=0
del_count=0
month=""
while index<len(get_data):
    if re.fullmatch("^ *[0-9]+ *月.*", get_data[index-del_count]):
        month = get_data[index-del_count][re.fullmatch("[0-9]+ *月", get_data[index-del_count]).start(): re.fullmatch("[0-9]+ *月", get_data[index-del_count]).end()]
        del get_data[index+1-del_count]
        del get_data[index+2-del_count]
        del_count+=2
        index+=3

        continue

    elif re.fullmatch(" *[0-9]+ *", get_data[index-del_count]):
        if add_text!="":
            text.append(add_text)
            add_text=month + get_data[index-del_count] + get_data[index-del_count+1]

            index+=2

        while not re.fullmatch("^ *[0-9]+ *月?.*", get_data[index-del_count]):
            add_text+=get_data[index-del_count]
            index+=1


"""

    #elif re.

#print(text)
with open(r"module\pdf\output.txt", "w", encoding="ANSI")as f:
    for i in text:
        f.write(i+"\n")