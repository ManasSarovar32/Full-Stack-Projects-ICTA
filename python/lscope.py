def test():
	global y
	y=20
	print "inside test x is",x,"y is",y
x=50
test()
print "value of x is",x,"y is",y
