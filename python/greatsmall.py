#a=[4,6,2,8]
#max=0

#for i in a:
#	if i>max:
#		max=i
#	if i<min:
#		min=i
		
#print max
#print min



lst=[]
n=int(input("enter the limit : "))

for i in range(n):
	nums=int(input("enter number "))
	lst.append(nums)
	
print lst
print "maximum=",max(lst)
print "minimum=",min(lst)
	
