#a=[1,"hello",4.5,[2,"welcome",4.5],5.6]
#print a[1]
#print a[3]
#print a[3][1] 		#to view particular element

#for i in a:
	#print i  	#to print list

#a[0]=2
#a[3][1]="hai" 		#to change the element
#print a

a=[1,2,3]
#b=a+[1]
#print b 		#concatenation

#print b*3 		#repeats

#a.append(6)
#print a 		#add elemnt

b=[4,5,6]
a.extend(b)
#print a			#extent the list

a.insert(2,7)
print a			#to insert in particular index

a.pop()
print a			#to delete last element

a.pop(2)
print a			#to delete particular element

#print a[::-1]

a.reverse()
print a			#to reverse a list
