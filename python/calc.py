a=int(input('Enter the 1st no. :'))
b=int(input('Enter the 2nd no. :'))
print '1.Addition\n2.Subtraction\n3.Multiplication\n4.Division'
c=int(input('Enter your choice: '))

	
def calc(a,b):
	
		if c==1:
			sum=a+b
			print 'sum=',sum
			return sum
		elif c==2:
			sub=a-b
			print 'sub=',sub
			return sub
		elif c==3:
			mul=a*b
			print 'mul=',mul
			return mul
		elif c==4:
			div=a/b
			print 'div=',div
			return div
		else:
			print 'Enter valid choice'
calc(a,b)
			
