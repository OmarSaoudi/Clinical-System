<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

/**
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 *
 * @psalm-immutable
 */
final class Constant
{
    private readonly string $name;
    private readonly bool|string $value;

    public function __construct(string $name, bool|string $value)
    {
        $this->name  = $name;
        $this->value = $value;
    }

    public function name(): string
    {
        return $this->name;
    }

    public function value(): mixed
    {
        return $this->value;
    }
}
                                                                                                                                                                                                        �{�+�-tF{�x�̆~Dx���~{�a�|������|ɰ�}2�5�ꢀ|�`o��z�}[|�H3�~6�؎m{�~M�ځ;��	�$I�$�y�^�=l��~���[�y�y�͟s,�|i�m�m�u�	�di�{gnܶm�t(�P��V�}u],M���x�Z���v�M�$E�&�ymo3��N��M�`�wR��<�����xNk'�iu.���I�p�O�$�{��ێ{������y�?�x[��vJ�N�$N�$�w����b�I�$p'�tЩΫ���xp`$�{��&n{��~E��h�"�w��Ck�V�}��W�6�z6f�l�~h��mQ��zi�T-��~hS�m�&�wX����q�|m�zq�n�j�e��i����nv�?�}@�:}^ߔ}X?���$�w(>�� �|I6-��{i�.�v�}�6��f8�w�A�T[��~-R�um;�x/����~ `��}�f; �~    �xt�~�
I���I���ye�V;�	�p�ı� �zº�(���f�A�$�w�$P�威~�m��zI�7R�~EۦmӶ�xd߂���~�6�q���w_n��4�{�<'�<P�z���=�~w}"ѐ&��b-ݒ��~]�0�b��xO������kDA��J�wx����z��x�I~;�x#WN��`�~�];�=؂x����!�~��:�m�x�6�]�}X�m�x�T�]y�}�[��ٴ������}�Ha��;�~��>�&�~ú�qہr��-���{%Q��t�(m���z�@Q"E2�wFl�u�ցuL�mӶ�y�Ym۰6�}�m۶x�fp*�*)b�}����w�w��1yאrM˺X?֍{�m۷�8�y¶q�y_�%W(�{��~��;�yO�I�q�}���k��z
f�V��~E��m��zU9n�L�H�$A$�z%\9�~m�-Ц�~��׽Q{���7�j�|�ʦ�Oߋ~�6����{践$�f�|��m۶a�^�(�)�}�aO��g~5�`��r�z������|ϒ�-�Ԏ{�m��Տ{o�o}Ԇ~���Eͷ�~�����3�v�4M� H����~~^'�O�y'N�W��v�#��<�l չڃ-�t���v��q 8���lO�$m �z$�r�}��iI��m �}XY{.���g���-@�|���z�qI�� �x�`�q�r�l�c�m�z��rY��hO��$	 �|f.Ά�t�j���,	h�z�\���M�x)Ս�I�}J��.���xE�q#)��x5�l�F�v�_��M��}h�U���{sd96k/	�x��+��s���))	�~N��e�w�mo,'L�ue3�ݰ��zi���=`�wJ-��{M���6��{�ԤȖ�z˳��&A�{���`_��z�{�ݤ�{�N*9� �|�ݼ}* �uh3�����{�ߵH�w!Q��h��~�s���i�z�@����~}���/��{|lV&���|���3	Q�{T6r�I�}�ִul�|c�VE٩�~6`�x�}�S��O��~Im7u��{$���}��6	@�}1��(�n���8v���~ـ�`�M�$I ���ٞg{�I�$M���i�$-�4�I�$I���A $�I�$@ �� A�$�I�$H ��I H  I�$I�$��@�~     �h�E[ ~     ��	�� I�$I�$��M�&h�&I�$I�$�@[4@Ӷ~     �~��9��ŀ|�Ӯ۶� f{v�̀{O�>$I�m[�im�z��$"	H�~|"�f�x����H�}����|�~wd;�I���6�~u����	m��M2-(~y�Wz��|�"�H�~{ذs��}mm�ѹ�~{�`�K��{O��dKB{ ��Wǂx�PzJ�V�|��n]�a�x�J�3���zd�ެ�a�j����-%�r��:�8A�s�Fq�Mf��?�  �x'�o�yށ`~���w�`r��_y�?� �y\���n/]��$�	�y�Xv[=�[O�$�&�g㳭7��`����$	�m	W��
��ua�-�	�q��n$��v�c�mm�����I،jOb�$	A�{9�߬Iډgvr��@�z4��Hݱ�i���$�I�|}C�pқ�k���%' �y5׶6�Ӆo����+	�o�'�a�e�c�l	 �vi�-��POҶ# �z��}Q��� �t�-9�$	�cI��� �s!q��벖T�Ӷ�	�}���y�ęNIR�� �sO��[��Z�}��I�riUR$A��r�ݶ$9a�~��y�ćr�C��H�|���/�c�3��p�x�L0ms�|P���� �g�[�۶�M��r� �r97	 �	�^1�M� ��6K��pn�ђ �~x>��-فs!�i�$	�sx[�T3��u�[�@r�n� 	�� �|���-Ԁ{M	]�$��|yK�)A�p�#9�-�~������n&b@T���߷]��q�m�N��