#include<iostream>
#include<stdio.h>
using namespace std;

int LeadIn() {
	int i = 0;
	for (i = 1; i <= 7; i++)
	{
		//printf("周");
		cout << "周";
		cout << i;
		cout << "\t";
	}
	return 0;
}

int Line() {
	int i;
	for (i = 0; i < 52; i++)
		cout << "=";
	cout << "\n";
	return 0;
}int LineOfDecrease() {
	int i;
	for (i = 0; i < 7; i++) {
		if (i < 6)
			cout << "+--+----";
		else
			cout << "+--+";
	}
	cout << "\n";
	return 0;
}
int month(int month, int firstday, int finalday) {
	Line();
	cout << "\t\t\t";
	cout << month;
	cout << "月\n";
	Line();
	LeadIn();

	int i = 1, j = 1, day;

	for (i = 1; i <= 5; i++)
	{
		if (j == 1) {
			cout << " ";
			cout << "\t";
		}
		cout << "\n";
		LineOfDecrease();

		for (j = 1; j <= 7; j++)
		{
			day = (i - 1) * 7 + j - firstday;
			if (i * 7 - 7 + j - firstday <= 0) {
				cout << " \t";
				continue;
			}
			cout << "|";
			if (day <= finalday) {

				cout << day;
				if (day < 10)
					cout << " ";
			}

			cout << "|\t";
			if (day == finalday)
				break;
		}


		if (day == finalday)
			break;
	}
	cout << "\n";
	Line();
	return 0;
}

int choseMonth(int Month) {

	switch (Month) {
	case 1:month(1, 4, 31); break;
	case 2:month(2, 0, 28); break;
	case 3:month(3, 0, 31); break;
	case 4:month(4, 3, 30); break;
	case 5:month(5, 5, 31); break;
	case 6:month(6, 0, 30); break;
	case 7:month(7, 3, 31); break;
	case 8:month(8, 6, 31); break;
	case 9:month(9, 2, 30); break;
	case 10:month(10, 4, 31); break;
	case 11:month(11, 0, 30); break;
	case 12:month(12, 2, 31); break;
	}
	return 0;
}
int main() {
	cout << "请输入你要查询的月份:";
	int month = 0;
	cin >> month;
	choseMonth(month);
}
