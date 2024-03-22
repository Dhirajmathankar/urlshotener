// #include <stdio.h>
// #include <string.h>
// #include <iostream>
// using namespace std ;


// void  permute(char *str, int start, int end){
//      if (start == end)
// 	 {
// 		printf("%s\n", str);
// 	 }
// 	 else
// 	 {
// 		for (int i = start; i <= end; i++)
// 		{
// 			 cout<< str + start << " +  "<<endl ;
// 			 swap((str + start), (str + i));
// 			 cout<< str + start << " -  "<<endl ;
// 			 permute(str, start+1 , end);
// 			 swap((str + start), (str + i));
// 		}
		
// 	 }
	 
// }
// int main() {
//     char str [100] ;
// 	printf("Enter your string");
// 	scanf("%s", str);
// 	int n = strlen(str);
//     printf("Permutation of your program : ");
// 	permute(str, 0, n-1);
//     return 0;
// }


// void permutation(chat * str , int start, int end){
// 	if(start == end){
// 		cout<< str << endl;
// 	}
// 	for(int i  = 0 ; i <= end ; i++){
// 		swap((str+start), (str + i));
// 		permutation(str , start+1 , end);
// 		swap((str+start), (str + i));
// 	}
// }
// int main(){
// 	string str = "dhiraj";
// 	permutation(str, 0 , end);
// }

// #include<iostream>

// using namespace std ;


  
// int main(){
// 	int arr1[] = {1, 2, 3, 4, 5};
// 	int arr2[] = {1, 2, 3, 6, 7};

// 	int size1 = sizeof(arr1) / sizeof(int);
// 	int size2 = sizeof(arr2) / sizeof(int);
//     int max  = size1 < size2 ? size2 : size1 ;
	
// 	int ans[8] = {0};

// 	for (int i = 0; i < size1; i++)
// 	{
// 		if (ans[arr1[i]] != -1)
// 		{
// 			if (ans[arr1[i]] == 0)
// 			{
// 				ans[arr1[i]]  = 1 ;
// 			}
// 			else{
// 				ans[arr1[i]] = -1 ;
// 			}
// 		}
// 	}
	
// 	for (int i = 0; i < size2; i++)
// 	{
// 		if (ans[arr2[i]] != -1)
// 		{
// 			if (ans[arr2[i]] == 0)
// 			{
// 				ans[arr2[i]]  = 1 ;
// 			}
// 			else{
// 				ans[arr2[i]] = -1 ;
// 			}
// 		}
// 	}
// 	for (int i = 0; i < 8; i++)
// 	{
// 		if (ans[i] != 0 && ans[i] != -1)
// 		{
// 			cout<< i << "   " ;
// 		}
// 	}
	
// 	return 0 ;
// }

// swap alter net number anserw 


// #include<iostream>
// using namespace std ;
// int main(){
// 	int arr[] = {1, 2, 7, 8, 5, 9};
//     int size = sizeof(arr)/ sizeof(int) ;
// 	for (int i = 0; i <= size; i = i+ 2 )
// 	{
// 		if ((i+1) < size)
// 		{
// 			int temp  = arr[i];
// 			arr[i] = arr[i+1];
// 		    arr[i+1] = temp ;
// 		}
// 	}

// 	for (int i = 0; i < size; i++)
// 	{
// 		cout<< arr[i] << " :  " ;
// 	}
	
	
// 	return 0 ;
// }


// #include<stdio.h>
// #include<iostream>
// #include<bits/stdc++.h>
// using namespace std;

//  int main()
// {

// 	 int arr[] = {1,1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7 , 8, 8};
// 	 int count = 0;
// 	 int ans[7] = {0};

// 	 int size = sizeof(arr)/ sizeof(int) ;
// 	 for (int i = 0; i < size; i++)
// 	 {
// 		// count ^= arr[i];
// 		++ans[arr[i]];
// 	 }
// 	 for (int i = 0; i < size; i++)
// 	 {
// 		if (ans[i] == 1)
// 		{
// 			cout<<i << "  " ;
// 		}
		
// 	 }
// 	 cout<<count << "  Hello ans : ";
// 	 return 0 ;
// }