d={"welcome":"swagatham",3.5:"threepointfive",4:"four"}

print d

print d[4]		

d[3.5]="ThreePointFive"
print d

print d.keys()		#to print key

print d.values()		#to print values

print d.items()		#to print as list

for i in d:
	print i,d[i]		#to print one by one

print d.has_key(3.5)		#to check key

print d.get(4)		#for corresponding key value

del d[3.5]		#to delete a pair
print d		

