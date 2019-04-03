#greeting="hello world"
#greeting[0]="j" //immutable
#print greeting

#greeting="hello world"
#newgreeting="j"+greeting[1:] #mutable
#print newgreeting

a="Vimal Jyothi College"
b=a[0:12]+" Engineering "+a[13:20]
print b
