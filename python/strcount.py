#str="this is string example....wow!!!"
#print str.count("i",4,40)
#print "wow occur in",str.count("wow")
#print "wow occur in",str.count("hai")
#print str.count("s")

str=raw_input("Enter the string: ")
n=0
p=0
k=0
j=0
for i in str:
	if i in "aeiouAEIOU":
		n=n++1
	elif i in "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ":
		p=p+1
	elif i in " ":
		k=k+1
	elif i in "?":
		j=j+1
print "Vowels:",n
print "Constants:",p
print "Words:",k+1
print "Question:",j
