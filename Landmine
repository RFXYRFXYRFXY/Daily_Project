package RFXY;

import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class 扫雷 {
    // 设置数组
    // LandMine指的是地雷，-1代表地雷，其余数字代表周围地雷数量
    // state代表状态，0代表未打开，1代表打开
    // Width代表棋盘（正方形）宽度为10
    public static int[][] LandMine = new int[10][10];
    public static int[][] state = new int[10][10];
    public static final int Width = 10;

    //初始化地图
    //设置一个10*10的地图
    // 输入*号，代表未查看
    public static void maps() {
        Random rad = new Random();
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                LandMine[i][j] = 0;
                state[i][j] = 0;
                System.out.print("*\t");
            }
            System.out.println("");
        }
        System.out.println("\n\n");
    }

    //放置地雷
    public static void LayLandmine() {
        int[] thunder = new int[10];
        for (int i = 0; i < 10; i++)
            thunder[i] = (int) (Math.random() * 100);

        //解决数组数字重复的现象

        for (int i = 0; i < 10; i++) {
            int x = thunder[i] / 10;
            int y = thunder[i] % 10;
            LandMine[x][y] = -1;
        }
    }

    //查看周围地雷数量
    public static void accountMine() {
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                //踩雷
                if (LandMine[i][j] == -1) {
                    continue;
                }
                int Surrounds = 0;
//                左上
                if (i - 1 >= 0 && j - 1 >= 0 && LandMine[i - 1][j - 1] == -1) {
                    Surrounds++;
                }
//                正上
                if (i - 1 >= 0 && LandMine[i - 1][j] == -1) {
                    Surrounds++;
                }
//                右上
                if (i - 1 >= 0 && j + 1 <= LandMine[i].length - 1 && LandMine[i - 1][j + 1] == -1) {
                    Surrounds++;
                }
//                正左
                if (j - 1 >= 0 && LandMine[i][j - 1] == -1) {
                    Surrounds++;
                }
//                正右
                if (j + 1 <= LandMine[i].length - 1 && LandMine[i][j + 1] == -1) {
                    Surrounds++;
                }
//                左下
                if (i + 1 <= LandMine.length - 1 && j - 1 >= 0 && LandMine[i + 1][j - 1] == -1) {
                    Surrounds++;
                }
//                正下
                if (i + 1 <= LandMine.length - 1 && LandMine[i + 1][j] == -1) {
                    Surrounds++;
                }
//                右下
                if (i + 1 <= LandMine.length - 1 && j + 1 <= LandMine[i].length - 1 && LandMine[i + 1][j + 1] == -1) {
                    Surrounds++;
                }
                LandMine[i][j] = Surrounds;
            }
        }
    }

    //输出地图
    public static void OutputMaps() {
        for (int i = 0; i < 10; i++) {
            for (int j = 0; j < 10; j++) {
                //制作完成后，将数字换成*号
                if (state[i][j] == 1)
                    System.out.print(LandMine[i][j] + "\t");
                else
                    System.out.print("*\t");
            }
            System.out.println();
        }
    }

    //输入坐标,然后执行判断
    public static void input() {
        int x, y;
        Scanner src = new Scanner(System.in);

        System.out.println("请输入x,y的坐标");
        x = src.nextInt();
        y = src.nextInt();
        x--;
        y--;
        if (x <= 0 || y <= 0 || x > LandMine.length+1 || y > LandMine.length+1) {
            System.out.println("您的操作有误，请输入1-10之间的数字");
            input();
        }
//        state=1代表该格子已经被启用，不可再次调用
//        上部分
        if (x - 1 >= 0 && x - 1 >= 0 && LandMine[x - 1][y - 1] != -1)
            state[x - 1][y - 1] = 1;
        if (x - 1 >= 0 && LandMine[x][y - 1] != -1)
            state[x][y - 1] = 1;
        if (x - 1 >= 0 && y + 1 <= Width - 1 && LandMine[x + 1][y - 1] != -1)
            state[x + 1][y - 1] = 1;

//        下部分
        if (x - 1 >= 0 && y < Width - 1 && LandMine[x - 1][y + 1] != -1)
            state[x - 1][y + 1] = 1;
        if (y + 1 <= Width - 1 && LandMine[x][y + 1] != -1)
            state[x][y + 1] = 1;
        if (x + 1 <= LandMine.length - 1 && y + 1 < Width - 1 && LandMine[x + 1][y + 1] != -1)
            state[x + 1][y + 1] = 1;
//        中间部分
        if (x - 1 >= 0 && LandMine[x - 1][y] != -1)
            state[x - 1][y] = 1;
        state[x][y] = 1;
        if (x < LandMine.length - 1 && LandMine[x + 1][y] != -1)
            state[x + 1][y] = 1;
        //如果踩到地雷
        if (LandMine[x][y] == -1) {
            over();
        } else {
            //输出地图
            OutputMaps();
            //重复循环，直到踩到地雷
            input();
        }

    }

    public static void over() {
        System.out.println("你踩到地雷了，游戏结束！");
        for (int i = 0; i < LandMine.length; i++) {
            for (int j = 0; j < LandMine[i].length; j++) {
                System.out.print(LandMine[i][j] + "\t");
            }
            System.out.println();
        }
    }

    //主方法
    public static void main(String[] args) {
        //放置地图
        maps();

        //布置地雷,并且设置map中地雷数量
        LayLandmine();
        accountMine();

        //输入坐标
        input();
    }
}
