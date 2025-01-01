import numpy as np

def active_f(val):
    af = 1
    if (int(val) <= 0):
        af = 0
    return af

def error(val,org):
    return org - active_f(val)

def neuron(in1,in2,org,max_epochs=1000):
    tw1 = w1
    tw2 = w2
    tbi = bias
    for epoch in range(max_epochs):
        y = tw1 * in1 + tw2 * in2 + tbi
        if(error(y,org) == 0):
            return tw1,tw2,tbi
        else:
            tw1 = round(tw1 + nu * error(y,org) * in1, 1)
            tw2 = round(tw2 + nu * error(y,org) * in2, 1)
            tbi = round(tbi + nu * error(y,org), 1)

in_arr = list(map(int,input("Enter with , : ").split(',')))
arr = np.array(in_arr).reshape(4,3)
w1 = float(input("Please enter weight1 : "))
w2 = float(input("Please enter weight2 : "))
bias = float(input("Please enter bias : "))
nu = float(input("Please enter learning_rate  : "))

# ex:
# w1 = 0.6
# w2 = 0.6
# bias = 50
# nu = 0.5

for i in arr:
    in1 = i[0]
    in2 = i[1]
    org = i[2]
    print(f"For inputs {in1,in2} : weights/bias {neuron(in1,in2,org)} ")