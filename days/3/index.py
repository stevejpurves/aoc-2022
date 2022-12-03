import string
from functools import reduce

with open('./input.txt', 'r') as f:
    rucksacks = list(map(lambda i: i.replace('\n',''), f.readlines()))

def find_common(r: str):
    L = set(r[:int(len(r)/2)])
    R = set(r[int(len(r)/2):])
    return ''.join(L.intersection(R))

def get_priority_sum(the_list: list):
    azAZ = string.ascii_lowercase + string.ascii_uppercase
    return reduce(lambda a, x: a+x, [azAZ.index(item)+1 for item in the_list])

common_items = ''.join([find_common(r) for r in rucksacks])
print(f"Total Priority for items {get_priority_sum(common_items)}")

def find_badges(the_list: list, k: int):
    idxs = [(k*n, (k*n)+k) for n in range(0, len(the_list) // k)]
    groups = [the_list[a:b] for a,b in idxs]
    return [''.join(set(g[0]).intersection(set(g[1]),set(g[2]))) for g in groups]

badges = find_badges(rucksacks, 3)
print(f"Total Priority for badges {get_priority_sum(badges)}")